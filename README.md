# React + Supabase Project

This project is a web application built with React + JavaScript using Vite.  
Data is entered into two input fields, registered in a Supabase table, and the data is displayed in real time.

## Study Record Application
By entering the study content and study time into the input fields and pressing a button, the study record is registered and displayed in real time.
The record can be registered and displayed in real time.

## Features

- Database management with Supabase
- Supabase URLs and keys are managed by .env

## Installation

```bash
$ git clone https://github.com/wws225/task1.git
$ cd task1

$ npm install vite --save-dev
```
Creating the database


# CreateDB

1. Create a Supabase account
Go to the official Supabase site.
https://supabase.com/
Create an account and log in. 2.

2. Set up database schema
After creating a project, you can create a new table in the Table Editor.
Click New Table.
Specify the table name (study-record) and columns (Title, Time).
Specify the data type of the columns and click Save to save.

TableName: study-record
| column | type    | option   |
|--------|---------| ---------|
| id     | uuid    |          |
| title  | varchar | non null |
| time   | int4    | non null |

3. create .env file (get API key and URL)
Create an .env file directly below the project.
Go to Settings > API from the left menu of the Supabase Dashboard.
Confirm the URL and API key (anon/public) and put them in the .env file.

```bash
VITE_SUPABASE_URL=https://<your-project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-public-api-key>
```

# execute
````bash
$ npm run dev
```