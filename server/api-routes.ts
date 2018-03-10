import * as express from 'express';
import { indexRoute } from "./routes/index-route";
import { userRoutes } from "./routes/user-route";
import { logsRoutes } from "./routes/log-route";

export function registerApiRoutes(app: express.Application): void {
    app.use('/api/user', userRoutes);
    app.use('/api/logs', logsRoutes);

    //UI route, always register this route in the end
    app.use('/', indexRoute);

    //page not found route
    // app.use('*', );
}