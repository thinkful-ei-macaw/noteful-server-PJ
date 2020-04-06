const path = require('path');
const express = require('express');
const xss = require('xss');
const folderService = require('./folder-service');

const folderRouter = express.Router();
const jsonParser = express.json();

const serializeFolder = folder => ( {
  id: folder.id,
  title: folder.title
});

folderRouter
  .route('/:id')
  .all((req, res, next) => {
    folderService.getById(
      req.app.get('db'),
      req.params.id
    )
    .then(folder => {
      if(!folder)
      return res.status(404).json({
        error. {message: Folder does not exist}
      })
    })
  })