const express = require('express');
const { createJob, getJobs, getJobById, updateJob, deleteJob } = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Job-related routes
router.post('/', createJob);          // Create a job
router.get('/', getJobs);                             // Get all jobs
router.get('/:id', getJobById);                       // Get job details by ID
router.put('/:id', updateJob);        // Update a job
router.delete('/:id',deleteJob);     // Delete a job

module.exports = router;
