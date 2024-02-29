#!/bin/bash

(cd server && npm run dev) &
(cd che-beviamo && npm run start) &