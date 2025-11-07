# Phase: 1 Backend Foundation

### Date: 7 Nov 2025
#### Day 8

---
# Authentication & Authorization

- Authentication means to check the user is available is our database or not .

- Authorization means to check the user is authorized to perform the particular task

- When the user wants any page the server ask them to login then verify then in database that the user is available or not if the user available it give the page.

- But After that user perform any other action on page to complete that action the Server will ask them again to login.

- The Server forgets the user every time and ask them to login each time they do something on the website.

- To solve this problem we have concept of ``` Cookies and Session ```

- What is this? When an user login and server verify it and send the response with that response server also send and random string attach to and when the user again send any request that string comes back attach to the request with string server comes to now the user is Authenticated and give back the response.


---

# What I Learned ?

- How to set ``` Cookies ``` and read it.

- what is ``` bcrypt ``` and how to use it for password ``` encryption and decryption ```.

- What is ``` JWT ``` and how to store data in it.