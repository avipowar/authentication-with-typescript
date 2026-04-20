import type { Request, Response } from "express";
import { signUpPayloadModel } from "./model";
import { db } from "../../db";
import { userTable } from "../../db/schema";
import { eq } from "drizzle-orm";
import { createHmac, randomBytes } from "node:crypto";

class AuthenticationController {
  public async handleSignup(req: Request, res: Response) {
    const validationResult = await signUpPayloadModel.safeParseAsync(req.body);

    if (validationResult.error)
      return res.status(400).json({
        message: "body validation is failed",
        error: validationResult.error.issues,
      });

    const { firstName, lastName, email, password } = validationResult.data;

    const userEmailResult = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email));

    if (userEmailResult.length > 0)
      return res
        .status(400)
        .json({
          error: "duplicate entry",
          message: `user with ${email} already exist`,
        });

    const salt = randomBytes(32).toString("hex")

    const hashPassword = createHmac("sha256", salt).update(password).digest("hex")
    
    // array destructuring
    const [result] = await db.insert(userTable).values({
      firstName,
      lastName,
      email,
      password: hashPassword,
      salt
    }).returning({id: userTable.id})

    return res.status(201).json({message: `user has been created successfully`, data: {id: result?.id}})

  }
}

export default AuthenticationController;
