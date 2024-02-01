import { NextResponse } from "next/server"

export const GET = async () => {
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://mood-x-production.up.railway.app/"
      : "http://localhost:5000/"

  try {
    const response = await fetch(`${API_URL}/artists`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error:", error)
  }
}
