---
layout: base
search_exclude: true
menu: nav/home.html
---

**Learning Objectives**

- Understand what Base64 encoding is and why it is used.


- Learn how to encode and decode data using Base64 in Python.


- Explore real-world applications and related encoding techniques.

**Introduction to Base64**

- Base64 is a way to convert data (like text or images) into a set of 64 different characters so it can be safely stored or sent without getting corrupted.

- Base64 is an encoding scheme that converts binary data into a text-based format.


- It is not encryption; it is a reversible encoding technique used for safe data transmission.

**Why Use Base64?**

- Ensures that binary data (like images, files, or special characters) can be safely transmitted over text-based media.


- Helps avoid issues with special or non-printable characters in systems like emails, APIs, and web development.

**Variations of Base64**

- Standard Base64 – Uses A-Z, a-z, 0-9, +, / with = padding.


- URL-Safe Base64 – Uses - and _ instead of + and /.


- Base64 without Padding – Removes = for size efficiency.


### Example of Base64 Encoding  

Base64 is a way to encode data into a safe, text-based format. It takes regular text and converts it into a set of **64 characters** (A-Z, a-z, 0-9, +, /), often with `=` padding at the end.  

#### Example: Encoding "Hello" in Base64  

Original text: Hello
Binary format: 01001000 01100101 01101100 01101100 01101111
Base64 output: SGVsbG8=




The word **"Hello"** gets converted into a Base64 string **"SGVsbG8="**, which is safe for storage and transmission.  

Base64 is commonly used in emails, images, and web data encoding to prevent corruption.

### Applications

- Social Media & Profile Pictures 

- Websites like Instagram and Snapchat use Base64 to store small images (like profile pictures) directly in code instead of separate files.
Sending Images & Files in Text Messages 

- When you send an image through apps like Discord or iMessage, Base64 helps convert the image into text so it can be sent more easily.
Encoding Passwords & Data Security 

- Some websites use Base64 to store and safely transfer login credentials, though it’s not a secure way to encrypt passwords.
Watching YouTube Videos & Streaming 

- Video thumbnails, previews, and even some metadata use Base64 encoding to load faster on your screen.
QR Codes & Barcodes 

- Base64 is often used behind the scenes to store encoded information in QR codes (like when you scan a code for concert tickets or a menu).
Storing Emojis in Code 

- When you use emojis in programming or on websites, they’re often stored in Base64 to make them work across different devices.

### Popcorn Hack:

Come up with two potential downsides to using base64 as opposed to methods like compression or encryption.

**Relevant Topics**

- Encoding vs Encryption – Base64 is encoding, not encryption.

- Base64 in JWT (JSON Web Tokens) – Stores user authentication info in web applications.

- Performance Considerations – Increases data size, affecting efficiency in large-scale applications.

**Summary**

- Base64 encodes binary data into a text-friendly format.

- It is widely used in web development, APIs, and authentication.

- Encoding and decoding are simple using Python’s base64 module.

- Base64 is not encryption and should not be used for security purposes.

### Homework Hack:


For this task, convert your first name (or any word of your choice) into Base64.

Use an online Base64 encoder or write a simple Python script to convert your name into Base64.