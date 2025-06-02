import { Client, Databases, ID } from "node-appwrite"
import { appwriteConfig } from "../appwrite/config"
import { Appointment } from "@/types"
import emailjs from "@emailjs/browser"

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
  date: string
  email: string
  phone: string
  time: string
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
        email: appointmentData.email,
        phone: appointmentData.phone,
        time: appointmentData.time,
      }
    )

    await emailjs.send(
      "service_kcevcgt",
      "template_gci2hfu",
      {
        name: appointmentData.name,
        service: appointmentData.service,
        date: appointmentData.date,
        time: appointmentData.time,
        email: appointmentData.email,
        phone: appointmentData.phone,
      },

      process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
    )

    await emailjs.send(
      "service_kcevcgt",
      "template_gci2hfu", // create this in EmailJS
      {
        name: appointmentData.name,
        service: appointmentData.service,
        date: appointmentData.date,
        time: appointmentData.time,
        email: "matthijs.vannistelrooy@gmail.com",
        phone: appointmentData.phone,
      },
      process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
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
