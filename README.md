
# WeightlossCalc 

## Summary 
This project is a weightloss calculator which can calculate a possible % of weightloss possible of the user weight each week.  
This is built using Next.js, and Plotly, a graphing library for creating interactive visualizations. In this guide, you will find instructions on how to launch the project using GitHub Codespaces with Visual Studio Code, which will build the development environment using a Dockerfile in a devcontainer. Additionally, you will find information on how to work with branches in Git using trunk-based development.

## Launching the Project Using GitHub Codespaces with Visual Studio Code

GitHub Codespaces is a cloud-based development environment that allows you to contribute to projects without setting up your local development environment. The project uses a Dockerfile in a devcontainer to build the development environment for Codespaces. To launch the project using Codespaces, follow the steps below:


1. Open the  repository and click on the "Code" button.
2. In the dropdown menu, click on "Open with Codespaces" and then click "New codespace."
3. GitHub Codespaces will use the Dockerfile and the .devcontainer configuration to build the development environment. Wait for GitHub to create and configure the codespace. This process may take a few minutes.
4. Once the codespace is ready, Visual Studio Code will open in your browser. You can now access and edit the project files. You may need to install an extension to allow the codespace to run.

To launch the development server, run:
```
npm run dev
```
Open your browser and navigate to http://localhost:3000 to view the project.


## Trunk-Based Development with Git
Trunk-based development is a branching strategy where developers work on short-lived branches that are merged back into the main branch (usually called main or master). By following trunk-based development practices, you can ensure that your changes are frequently integrated into the main branch, reducing the risk of merge conflicts and making it easier to maintain the project Follow these steps to create branches and work with them using common Git commands:

1. Make sure you have the latest version of the main branch:

```
git checkout main
git pull
```

2. Create a new branch for your feature or bugfix:

```
git checkout -b <branch-name>
```
Replace <branch-name> with a descriptive name for your branch (e.g., add-user-profile or fix-login-issue).

3. Work on your changes, committing them as you go:
```
git add <file>
git commit -m "Your commit message"
```
Replace <file> with the file you've changed, and "Your commit message" with a brief description of your changes.

4. Once your changes are complete, push your branch to the remote repository:

```
git push -u origin <branch-name>
```
5. Create a pull request on GitHub to merge your changes into the main branch. Request a review from a project maintainer or another contributor.
6. Once your pull request is approved and merged, you can delete the local branch:
```
git branch -d <branch-name>
```

7. Update your local main branch with the latest changes:

```
git checkout main
git pull
```
Repeat these steps for each new feature or bugfix. 
