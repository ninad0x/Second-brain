import express from "express"
import { ContentModel, LinkModel, UserModel } from "./db"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";
import { userMiddlware } from "./middleware";
import { genHash } from "./util";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());


app.post("/api/v1/signup", async (req, res) => {
    // TODO: Add zod validation and password hashing
    const username = req.body.username
    const password = req.body.password

    try {

        await UserModel.create({
            username: username,
            password: password
        })

        res.status(200).json({
            message: "User Registered"
        })

    } catch (e) {
        res.status(411).json({
            message: "User already exists"
        })

    }
})


app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    // check if user exists
    const existingUser = await UserModel.findOne({username, password})
    // console.log(existingUser);
    
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_SECRET)
        
        res.status(200).json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }

    
})


app.post("/api/v1/content", userMiddlware, async (req, res) => {

    const { title, link, type } = req.body
    // const userId = (req as any).userId

   try {
    await ContentModel.create({
        title,
        link,
        type,
        tags: [],
        // @ts-ignore
        userId: req.userId,
    })

    res.status(200).json({
        message: "Content created"
    })
   } catch (error) {
    res.status(500).json({
        message: "no token provided"
    })
   }
})


app.get("/api/v1/content", userMiddlware, async (req, res) => {

    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")

    res.json({
        content
    })

})


app.post("/api/v1/delete", userMiddlware, async (req, res) => {
    const contentId = req.body.contentId
    // @ts-ignore
    const userId = req.userId     
    console.log(userId);

    await ContentModel.deleteMany({
        contentId,
        userId: userId        
    })

    res.status(200).json({
        message: "Content deleted successfully"
    })

})


app.post("/api/v1/brain/share", userMiddlware, async (req, res) => {

    const { share } = req.body

    if (share) {

        // if link already exists
        const existingLink = await LinkModel.findOne({
            // @ts-ignore
            userId: req.userId
        })

        if (existingLink) {
            res.json({
                message: existingLink.hash
            })
            return;
        }

        // if link doesn't exists  -->  generate new link
        const hash = genHash(10)
        await LinkModel.create({
            // @ts-ignore
            userId: req.userId,
            hash: hash
        })

        res.json({
            message: hash
        })
        return;

    } else {
        await LinkModel.deleteOne({
            // @ts-ignore
            userId: req.userId
        })
    }

    res.json({
        message: "Removed Link"
    })


})


app.get("/api/v1/brain/:shareLink", async (req, res) => {
    
    const hash  = req.params.shareLink

    const link = await LinkModel.findOne({
        hash
    })

    if (!link) {
        res.status(411).json({
            message: "Link does not exist"
        })
        return;
    }

    // extract userId and content
    const content = await ContentModel.find({
        userId: link?.userId
    })

    const user = await UserModel.findOne({
        _id: link?.userId
    })

    if (!user) {
        res.status(411).json({
            message: "User not found, this should not ideally happen"
        })
        return;
    }


    res.json({
        username: user.username,
        content: content
    })

})


app.listen(3000);