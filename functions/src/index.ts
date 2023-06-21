import { setGlobalOptions } from "firebase-functions/v2"

// Set the maximum instances to 10 for all functions
// limitations set by quota
setGlobalOptions({ maxInstances: 10 })

export * from "./ping"
