const Joi = require("joi");

const postSchema = Joi.object({
    title: Joi.string().required().min(5),
    description: Joi.string().required().min(10),
    tags: Joi.any(),
    image: Joi.any(),
})

module.exports = { postSchema }