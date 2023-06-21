// eslint-disable-next-line import/no-unresolved
import { initializeApp } from "firebase-admin/app"
import { config } from "firebase-functions/v1"
import { setGlobalOptions } from "firebase-functions/v2"

initializeApp(config().firestore)

// Set the maximum instances to 10 for all functions
// limitations set by quota
setGlobalOptions({ maxInstances: 10 })

export * from "./getPlayer"
export * from "./ping"
