# Tuesday, March 21st

## Terminal + VSCode Commands

- ls
  - See all files and folders in the directory (folder) you're currently in
- cd
  - Navigate to your home directory (folder)
- cd `<folder_name>`
  - Navigate to a directory (folder)
  - NEVER type out the full name - use tab instead!
    - You === Dev === Lazy
- mkdir `<folder_name>`
  - Make a directory (folder) in whatever directory (folder) you're in
- touch `<file_name>`
  - Create a file in whatever directory (folder) you're currently in
- pwd
  - Shows you path to the current directory (folder) you're in
- cd ../
  - Travel upwards
- cd ./
  - Don't travel
- code ./
  - Opens the current directory in VSCode
- node `<file_name>`
  - Runs the specified `.js` file
  - If the current folder can't "see" the file, it won't run!

## Git started with lecture notes

1. Make sure you're in the folder you want your notes to live in

   - A common place for this is your home directory
     - `cd` + enter

2. Clone our class repo

   - It will automatically be named `march23`, so name it something else if you'd like

   ```zsh
   git clone https://github.com/ZaviarBrown/march23.git optionalFolderName
   ```

3. `cd` into the new directory

   ```zsh
   cd optionalFolderName
   ```

4. Switch to your cohort's branch

   ```zsh
   git checkout PST
   ```

5. Anytime you want to update your notes, pull them down!

   ```zsh
   git pull
   ```

## Arrow Functions

Arrow functions are what I'll use from now on until forever

They are going to be used **_`everywhere`_**, so start getting used to them now!

- Arrow Functions are always anonymous
  - More on this later 👀
- Arrow Functions have implicit return (one line)
- Optional parenthesis for single parameter
- Everything else is the same!

  ```js
  // Multiline
  let multilineName = (name) => {
    return "My name is " + name;
  };
  multilineName("Zaviar");

  // Single Line
  let returnName = (name) => "My name is " + name;
  console.log(returnName("Kirin"));

  // Anonymous callback
  let arr = [1, 2, 3];
  let addOne = arr.map((num) => num + 1);
  console.log(addOne);
  ```
