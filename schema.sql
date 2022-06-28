CREATE SCHEMA SMCC;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE SMCC.SOURCE_TYPE AS ENUM (
    'WEBSITE',
    'FB_PAGE',
    'FB_GROUP',
    'FB_ACCOUNT'
);

CREATE TYPE SMCC.CONTENT_TYPE AS ENUM (
    'WEBSITE_POST',
    'FB_POST'
);

CREATE TYPE SMCC.CAMPAIGN_TYPE AS ENUM (
    'COMMENT',
    'REPORT'
);

CREATE TYPE SMCC.STATUS AS ENUM (
    'LIVE',
    'DEAD',
    'WAITING'
);

CREATE TYPE SMCC.campaign_status AS ENUM (
    'CREATED',
    'RUNNING',
    'LOST',
    'SUCCESS'
);

CREATE TABLE SMCC.topics
(
    _id          uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name         varchar(200) NOT NULL,
    keywords     varchar(200)[] NOT NULL,
    categories   varchar(200)[],
    totalContent int DEFAULT 0,
    likes        int DEFAULT 0,
    shares       int DEFAULT 0,
    comments     int DEFAULT 0,
    createdAt    timestamp with time zone NOT NULL DEFAULT NOW(),
    updatedAt    timestamp with time zone NOT NULL DEFAULT NOW()
);

CREATE TABLE SMCC.sources
(
    _id          varchar(200) PRIMARY KEY,
    link         varchar(1000) NOT NULL UNIQUE,
    name         varchar(200) NOT NULL,
    avatar       varchar(1000),
    type         SMCC.SOURCE_TYPE,
    status       SMCC.STATUS,
    lastetCrawl  timestamp with time zone NOT NULL DEFAULT NOW(),
    totalContent int DEFAULT 0,
    createdAt    timestamp with time zone NOT NULL DEFAULT NOW(),
    updatedAt    timestamp with time zone NOT NULL DEFAULT NOW()
);

CREATE TABLE SMCC.authors
(
    _id       varchar(200) PRIMARY KEY,
    link      varchar(1000) NOT NULL UNIQUE,
    name      varchar(200) NOT NULL,
    avatar    varchar(1000)  NOT NULL,  
    createdAt timestamp with time zone NOT NULL DEFAULT NOW(),
    updatedAt timestamp with time zone NOT NULL DEFAULT NOW()
);

CREATE TABLE SMCC.contents
(
    _id              varchar(200) PRIMARY KEY,
    sourceId         varchar(200) NOT NULL REFERENCES SMCC.sources (_id),
    authorId         varchar(200) REFERENCES SMCC.authors (_id),
    topicIds         varchar(200)[] NOT NULL,
    link             varchar(1000) NOT NULL UNIQUE,
    type             SMCC.CONTENT_TYPE,
    textContent      varchar NOT NULL,
    -- textContentTsvec tsvector NOT NULL,
    imageContents    varchar(1000)[],
    videoContents    varchar(1000)[],
    likes            int,
    shares           int,
    comments         int,
    totalReactions   int,
    reactionsPerHour real,
    commentIds       varchar(200)[],
    status           SMCC.STATUS,
    postedAt         timestamp,
    isNegative       boolean DEFAULT NULL,
    createdAt        timestamp with time zone NOT NULL DEFAULT NOW(),
    updatedAt        timestamp with time zone NOT NULL DEFAULT NOW()
);

CREATE TABLE SMCC.comments
(
    _id          varchar(200) PRIMARY KEY,
    authorId     varchar(200) NOT NULL REFERENCES SMCC.authors (_id),
    contentId    varchar(200) NOT NULL,
    textContent  varchar,
    imageContent varchar(1000),
    videoContent varchar(1000),
    link         varchar(1000) NOT NULL UNIQUE,
    likes        int,
    status       SMCC.STATUS,
    postedAt     timestamp,
    createdAt    timestamp with time zone NOT NULL DEFAULT NOW(),
    updatedAt    timestamp with time zone NOT NULL DEFAULT NOW(),
    CONSTRAINT fk_content FOREIGN KEY (contentId) REFERENCES SMCC.contents (_id) ON DELETE CASCADE
);

CREATE TABLE SMCC.campaigns
(
    _id          uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name         varchar(200) NOT NULL,
    type         SMCC.CAMPAIGN_TYPE,
    contentUrls  varchar(200)[] NOT NULL,
    interactions int NOT NULL DEFAULT 10,
    comments     varchar(1000)[],
    status       SMCC.campaign_status,
    runCount     int NOT NULL DEFAULT 0,
    startedAt    timestamp,
    endedAt      timestamp,
    createdAt    timestamp with time zone NOT NULL DEFAULT NOW(),
    updatedAt    timestamp with time zone NOT NULL DEFAULT NOW()
);

CREATE TABLE SMCC.fbAccounts
(
    _id        varchar(200) PRIMARY KEY,
    link       varchar(1000) NOT NULL,
    name       varchar(200) NOT NULL,
    email      varchar(200) NOT NULL,
    password   varchar(200) NOT NULL,
    status     SMCC.STATUS,
    cookies    varchar(10000),
    token      varchar(200),
    location   varchar(200),
    otp        varchar(200),
    proxy      varchar(200),
    device     varchar(200),
    avatar     varchar(1000)  NOT NULL,
    groupIds   varchar(200)[],
    targetIds  varchar(200)[],
    meta       json,
    firstRunAt timestamp with time zone DEFAULT NOW(),
    lastRunAt  timestamp with time zone DEFAULT NOW(),
    createdAt  timestamp with time zone NOT NULL DEFAULT NOW(),
    updatedAt  timestamp with time zone NOT NULL DEFAULT NOW()
);

-- CREATE INDEX contents_index ON SMCC.contents USING GIN (textContentTsvec);
