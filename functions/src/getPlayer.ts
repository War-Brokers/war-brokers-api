import { firestore } from "firebase-admin"
import { info } from "firebase-functions/logger"
import { onRequest } from "firebase-functions/v2/https"

export const getPlayer = onRequest(async (req, res) => {
	info(`attempting to fetch user info. UID: ${String(req.query.uid)}`)

	if (!req.query.uid) {
		res.json("Missing query parameter: uid")
		return
	}

	const doc = await firestore()
		.collection("players")
		.doc(String(req.query.uid))
		.get()

	const data = doc.data()

	if (!data) {
		res.status(400)
		res.json("invalid player UID")
		return
	}

	res.json(data)
})
