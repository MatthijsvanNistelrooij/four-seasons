import { Client, Databases, ID } from "node-appwrite"
import { appwriteConfig } from "../appwrite/config"
import { Appointment } from "@/types"

const client = new Client()
  .setEndpoint(appwriteConfig.endpointUrl)
  .setProject(appwriteConfig.projectId)

const databases = new Databases(client)

export { client, databases }

export const getAllAppointments = async () => {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId
    )
    return response.documents
  } catch (error) {
    console.error("Failed to fetch appointments:", error)
    return []
  }
}

export const updateAppointment = async (id: string, data: Appointment) => {
  try {
    await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      id,
      data
    )
  } catch (error) {
    console.error("Failed to update appointment:", error)
    throw error
  }
}

export const createAppointment = async (appointmentData: {
  name: string
  service: string
  date: string // pass as ISO string, e.g. new Date().toISOString()
}) => {
  try {
    const appointment = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      ID.unique(), // generate new id here
      {
        name: appointmentData.name,
        service: appointmentData.service,
        date: appointmentData.date,
      }
    )
    return appointment
  } catch (error) {
    console.error("Failed to create appointment:", error)
    throw error
  }
}

export const deleteAppointment = async (id: string) => {
  try {
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.appointmentsCollectionId,
      id
    )
  } catch (error) {
    console.error("Failed to delete appointment:", error)
    throw error
  }
}
