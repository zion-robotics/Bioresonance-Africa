import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN
const TEMPLATE_CONFIRM = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const sendAdminNotification = (params: Record<string, string>) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ADMIN, params, PUBLIC_KEY)
}

export const sendConfirmation = (params: Record<string, string>) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_CONFIRM, params, PUBLIC_KEY)
}