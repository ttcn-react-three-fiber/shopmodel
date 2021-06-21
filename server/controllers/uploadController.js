"use strict";
import fs from "fs";
import asyncHandler from "express-async-handler";
import { v2 as cloudinary } from "cloudinary";
import Product from "../models/Product.js";

cloudinary.config({
  cloud_name: "shopmodels",
  api_key: "634125622281371",
  api_secret: "64Rh97BIASBp-LHwcNE4Z3WHhmE",
});

const removeTemp = (path) => {
  fs.unlink(path, (err) => {
    console.log(err);
  });
};

// Upload Avatar
export const uploadAvatar = asyncHandler(async (req, res) => {
  const file = req.files.avatar;

  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "avatar",
  });

  if (result) {
    removeTemp(file.tempFilePath);
    res.json({ url: result.secure_url });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

// Upload Product Image
export const uploadProduct = asyncHandler(async (req, res) => {
  const file = req.files.product;

  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "products",
  });

  if (result) {
    removeTemp(file.tempFilePath);
    res.json({ url: result.secure_url });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});

// Upload Product Models

// Upload Product Models
export const uploadModel = asyncHandler(async (req, res) => {
  const file = req.files.model;

  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: "models",
  });

  if (result) {
    removeTemp(file.tempFilePath);
    res.json({ url: result.secure_url });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
});
export const upload3d = asyncHandler(async (req, res, next) => {
  try {
    const { spawn } = require("child_process");
    // let pos = filePath.lastIndexOf(".");

    const file = new Product({
      model: req.file.path,
    });
    await file.save();
    // res.status(201).send("File Uploaded Successfully");
    // const bat = await spawn("cmd.exe", [
    //   "/c",
    //   `cd uploads &&  node cli.js ${file.fileName}`,
    // ]);

    // bat.stdout.on("data", (data) => {
    //   console.log(data.toString());
    // });

    // bat.stderr.on("data", (data) => {
    //   console.error(data.toString());
    // });

    // bat.on("exit", (code) => {
    //   console.log(`Child exited with code ${code}`);
    // });

    // const filedt = new SingleFile({
    //   fileData: fs.readFileSync(`http://localhost:8080/uploads/shoemodel.js`, 'utf8'),
    // })
    // await filedt.save()
  } catch (error) {
    res.status(400).send(error.message);
  }
});
