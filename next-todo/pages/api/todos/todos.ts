import fs from "fs";
import { join } from "path";
import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../../types/todo";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const todos = await new Promise<TodoType[]>((resolve, reject) => {
        fs.readFile(join(process.cwd(), "data/todos.json"), (err, data) => {
          if (err) {
            return reject(err.message);
          }
          const todosData = data.toString();
          if (!todosData) {
            //* todos.json값이 비어있다면
            return resolve([]);
          }
          const todos = JSON.parse(data.toString());
          return resolve(todos);
        });
      });
      res.statusCode = 200;
      return res.send(todos);
    } catch (e) {
      // console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
  return res.send("hello Next!");
};
