# Goodreads by Wisemens

## List of Contents
- Descritpion
- Input
- Output
- Processing
- Credit
- Screenshots
- Link

> **Description:** Goodreads by wisemens, is place where you get to know books recommended by inlfuencers or creators you follow. Click on creator to know which books they recomend. Each book will be having cover image and title. Information is collected from public sources, common source for info is twitter accounts. Your one click away from knowing which book your wisemen recommended, click on the link below to know.

> **Input:** User has to click on wisemen to know which book he recommend, by default goodreads display book recommended by wisemen `kunal shah`. This app doesn't have any input constraints such as input cannot be empty.

> **Output:** User will get to know books recommended by wisemen, each book will be having a book cover image and book title. A wisemen section will be having atleast two books recommended by a wisemen.

> **Processing:**
>> - User has to click on wisemen to get started or to get know which book he recommended.
>> - When a user click on wisemen function `menRecommenderClickHandler` is called which take wisemen as argument and then gets book recommended by wisemen from the database, after that function `setWiseMen` is called with data of books recommende by wisemens, this function uses `useState` function to update books recommendation to user clicked wisemen.
>> - Function `setWiseMen` using passed argument updates list of books recommende by wisemen, for that it uses `useState` and map overs all the books recommended then display the list of books to the user.
>> - In this app `ReactJS` is used, which handles everything behind the scenes and make work easier.

> **Credit:** Goes to `ReactJS` and `CodeSandbox`.

> **Screenshots:**
![goodreads by wisemens book recommended by kunal shah](https://github.com/shmbajaj/goodreads-by-wisemens/blob/main/home_1.png?raw=true)
![goodreads by wisemens book recommended by tanay pratap](https://github.com/shmbajaj/goodreads-by-wisemens/blob/main/home_2.png?raw=true)

> **Link:** [Goodreads by Wisemens](https://5u02d.csb.app/)
