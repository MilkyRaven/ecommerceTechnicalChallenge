# Tech Challenge
Work in progress 🚧

These are my answers for the Question 5. I've also added credits for the image used for the Question 1 at the end of this README ✨

Thanks for reading! 🌸

## Q5 (Question 5)

### 1) You are in staging and notice that a promotion is showing the wrong discount in one region. Describe in detail how you would diagnose the issue and how you would secure the fix.

First I would verify the issue. I need to know if it’s really a bug or an isolated case. For that purpose, I would try to replicate it. Since it happened on stage environment, I would first check if it’s only on that environment or also happening in development. Once this is validated, I will notify my team and then I would try to identify in which layer the issue is happening (for example, if it’s a front end issue, DB, APIs,…). For that purpose, I will use every observability tool that is in my stack (logs, commits,…). Then, I would create a new branch locally, adjust what is necessary to correct it, update the tests that validate the fix and deploy the solution in staging to finally confirm if it was solved or not.

### 2) Tomorrow a promotion is scheduled to go live in 10 countries. There is a variable discount percentage depending on the country, applied to a dedicated category and only for selected users. Multiple promotions have been created, with different customer groups and qualifying products. Shortly before the end of the day, a request arrives to change the discount percentages and the customer groups. What do you do?

Since keeping the old data is not an option and I must update it with the request, and also considering these last minute changes can happen very frequently, I would take a "prevention approach". This means that I will make sure that the code made to generate these multiple promotions is well decoupled and ready to manage new data easily. With this, I mean avoiding hardcoding values, but I also mean choosing design patterns correctly. This will bring resilience to our system. A couple of patterns that come to my mind that could be very handy would be the Strategy Pattern. This pattern would allow to isolate the discount calculation, for example. Doing this, it will be easier to update one discount without messing around with the rest. At the end, it means that each class knows how to calculate its own discount. Also, a Factory Pattern looks useful to me. It could create dynamically the correct discount strategy based on the configuration that we provide to it.

From my point of view, the best "solution" is not a solution but a preparation: to build a system that allow us to update configurations without touching core logic, avoiding in this way to not only break SOLID principles but also to be able to adapt fast to unavoidable changes.




## Credits

Photo from [Malicki M Beser](https://unsplash.com/es/@themalicki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) on [Unsplash](https://unsplash.com/es/fotos/hombre-con-chaqueta-de-traje-negro-PKMvkg7vnUo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash).
