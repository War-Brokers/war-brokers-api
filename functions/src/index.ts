import express from "express"
import { firestore } from "firebase-admin"
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from "firebase-admin/app"
import { info } from "firebase-functions/logger"
import { setGlobalOptions } from "firebase-functions/v2"
import { onRequest } from "firebase-functions/v2/https"

initializeApp()

// Set the maximum instances to 10 for all functions
// limitations set by quota
setGlobalOptions({ maxInstances: 10 })

const app = express()

app.get("/ping", (request, response) => {
	response.send("pong!")
})

app.get("/players/:uid", async (req, res) => {
	info(`attempting to fetch user info. UID: ${req.params.uid}`)

	const doc = await firestore()
		.collection("players")
		.doc(req.params.uid)
		.get()

	const data = doc.data()

	if (!data) {
		res.status(400)
		res.json("invalid player UID")
		return
	}

	res.json(data)
})

export const api = onRequest(app)
