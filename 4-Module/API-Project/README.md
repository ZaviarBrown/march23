# Training Arc Is Over 🥷 🗡️ 🪨

## Great Question Only Zone 🙋

### `All questions should follow this format:`

### First message is 1-2 sentences

- Briefly describe the topic of your question
- No codeblocks, no detailed explanations, just a short & sweet description
- All further details are to be posted in your question's thread as replies

### Replies should contain

- The issue you are running into
  - Screenshots of errors
  - Codeblocks or branches of relevant code
- The debugging steps you have taken so far
  - Screenshots/links of references
  - Codeblocks or branches of changes to your code

## Grade As You Go!

### **_Project Assessments require `100%` completion & `100%` accuracy_**

Use your Postman specs to check that routes are working as you build them

- Remember to test for edge cases

A mock grading example will be shown on Saturday

### Replace Your API Docs!!!

The specs are to be matched **_exactly_**, so your routes must match the provided docs

Don't forget to replace the provided DB schema with your own!

### What we mean by **_exactly_**

For every provided request:

- Your server's response must have all data in the provided response
  - This means you can have extra data as long as you're not missing data
- Names of keys matter
- Data types of values matter
- Order of keys do not matter
- Content of values do not matter
  - Seed your data with whatever you want!

For error responses, it shouldn't return every error listed, but instead just the error(s) that actually ocurred

## It's Time To Git Gud

Using Git effectively is a major part of this project

Your first step today should be to watch the first video in Week 25

- We'll check in standup tomorrow to make sure your repo is setup with the appropriate branching

### In addition, I'd highly recommend making debugging branches as you run into bugs

Especially useful if your bug

- is taking a lot of time & lines of code to fix
- affects multiple files
- makes you scared

### Let's say we're on branch `feature-1` and you run into a difficult error

- Stop making changes and commit!
  - `git commit -m "Starting to debug <some error here>"`
- Move to a new branch
  - `git checkout -b debug-feature-1-error-name`
- Make changes and break everything with no fear!

### Uh oh, we made things much worse, time to try again

- Make sure to commit this branches changes
  - `git add .`
  - `git commit -m "Still not working, trying a different approach"`
  - `git push`
- Checkout your original branch
  - `git checkout feature-1`
- Try again on a new branch
  - `git checkout -b debug-feature-1-some-new-name`

### Once you solve your bug, update the original branch

- Make sure to commit this branches changes
  - `git add .`
  - `git commit -m "Fixed the error"`
  - `git push`
- Checkout your original branch
  - `git checkout feature-1`
- Then merge!
  - `git merge debug-feature-1-name-of-working-branch`

### Working in this manner provides three benefits:

- You always have a place to go back to for a fresh start
  - Sometimes it's nice to start over
- You keep track of previous attempted solutions
  - You might end up combining multiple attempted solutions later
- You have a branch to provide us with when you ask a question
  - This is waaaaayyyyy better than copy pasting a bunch of code blocks
