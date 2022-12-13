import express from 'express';

const router = express.Router();

import {createJob, deleteJob, updateJobs,getAllJobs, showStats}from '../controllers/jobsControllers.js';



router.route('/').post(createJob).get(getAllJobs);