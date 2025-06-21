import { Router } from "express";
import express from "express";
import path from "path";

import routesApi from "./api.js";
import ListPublic from "../app/Http/Controllers/ListPublic.js";
import CONSTANTS from "../../config/constants.js";

export default (function () {
  const router = Router();

  router.use(express.json());

  router.use(express.static(path.join(CONSTANTS.DIR, "public")));

  router.get("/", ListPublic);

  router.use("/", routesApi);

  router.use((req, res) => {
    res.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
  });

  return router;
})();
