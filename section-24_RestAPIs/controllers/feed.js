exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "First Post",
        content: "This is the first post!",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  /* Create post in db */
  /* 201 => created success */
  res.status(201).json({
    message: "Post created successfully!",
    posts: {
      id: new Date().toISOString(),
      title,
      content,
    },
  });
};
