import { Controller, Get, Route } from "tsoa"

@Route("/ping")
export class PingController extends Controller {
	/**
	 * Checks whether the server is alive or not
	 */
	@Get("/")
	public getPlayer(): "pong!" {
		return "pong!"
	}
}
