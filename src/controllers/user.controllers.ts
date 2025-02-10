import { Request, Response, RequestHandler } from "express";

const users = [{id: 1, name: "Juan"}, {id: 2, name: "Pedro"}, {id: 3, name: "Pablo"}, {id: 4, name: "Luis"}]

export const getUsers = (req: Request, res:Response): void => {
    res.status(200).json(users);
}

export const getUserById = (req: Request<{id: string}>, res: Response): void => {
    const id = parseInt(req.params.id, 10)
    const user = users.find((u) => u.id===id)
    if(!user) {
        res.status(404).json({
            message: "Usuario no encontrado"
        })

        return;
    }

    res.status(200).json(user)
}