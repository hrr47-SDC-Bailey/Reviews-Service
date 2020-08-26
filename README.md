# HostileWorld Reviews Component

Contains a fullstack React module with components for displaying a hostel's reviews.

## Related Projects

  - https://github.com/hrr47-karev/imageCarousel
  - https://github.com/hrr47-karev/property-info-service
  - https://github.com/hrr47-karev/AvailabilityComponent

## Table of Contents

1. [Requirements](#requirements)
2. [Development](#development)
3. [API Calls](#apicalls)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).
- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:
```sh
npm install -g webpack
npm install
```

### API Calls
All calls route to /hostles/:id/api/reviews
GET - Retrieves reviews with their authors from the database for the current hostel
POST - Adds a new review into the database for the current hostel
PUT - Updates a review that is currently in the database if the request contains all of the review information
DELETE - Deletes a review from the database if the request contains a review id number


