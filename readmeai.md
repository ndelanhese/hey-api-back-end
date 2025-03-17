<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center"><code>❯ REPLACE-ME</code></h1></p>
<p align="center">
	<em>Crafting Code Excellence, One Module at a Time!</em>
</p>
<p align="center">
	<!-- local repository, no metadata badges. --></p>
<p align="center">Built with the tools and technologies:</p>
<p align="center">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=default&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=default&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/tsnode-3178C6.svg?style=default&logo=ts-node&logoColor=white" alt="tsnode">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=default&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=default&logo=Jest&logoColor=white" alt="Jest">
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

Our project is a robust, user-friendly API for managing cat records. It offers a clean, efficient build environment and ensures consistent behavior across different environments. Key features include creating, updating, and deleting cat records, with detailed API documentation and end-to-end testing for reliability. It's perfect for developers, cat enthusiasts, or anyone needing a reliable system for managing cat-related data.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>The project uses the `NestJS` framework, which is a progressive Node.js framework for building efficient and scalable server-side applications.</li><li>The project is structured around the `Module`-`Controller`-`Service` pattern, with `AppModule` serving as the root module.</li><li>The project uses `TypeScript` as the primary language, providing static types and modern JavaScript features.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>The project uses `ESLint` and `Prettier` for linting and code formatting, ensuring consistent code style.</li><li>The project uses `TypeScript` for static typing, improving code readability and reducing the likelihood of runtime errors.</li><li>The project uses `tsconfig.json` to configure TypeScript compiler options, controlling the compiler's behavior and contributing to the robustness and efficiency of the codebase.</li></ul> |
| 📄 | **Documentation** | <ul><li>The project uses `Swagger` for API documentation, providing a clear overview of the API's capabilities and how to use them.</li><li>The project uses `OpenAPI` specification for defining the API, ensuring it adheres to industry standards.</li><li>The project provides clear installation, usage, and testing instructions in the `README` file.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>The project integrates with `React Query`, `Zod`, and `Next.js` through the `openapi-ts` tooling, enhancing functionality and ensuring type safety and validation.</li><li>The project integrates with `Jest` for testing, providing a comprehensive testing framework.</li><li>The project integrates with `Supertest` for end-to-end testing, simulating server requests and validating responses.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>The project is structured around the `Module`-`Controller`-`Service` pattern, promoting separation of concerns and code reusability.</li><li>The project uses `DTOs` (Data Transfer Objects) to define and validate the shape of data for creating and updating cat records.</li><li>The project generates TypeScript types and validation schemas for data transfer objects and API responses, promoting type safety and data integrity.</li></ul> |
| 🧪 | **Testing**       | <ul><li>The project uses `Jest` for unit and end-to-end testing, providing a comprehensive testing framework.</li><li>The project uses `Supertest` for end-to-end testing, simulating server requests and validating responses.</li><li>The project provides clear testing instructions in the `README` file.</li></ul> |

---

##  Project Structure

```sh
└── /
    ├── README.md
    ├── nest-cli.json
    ├── openapi-ts.config.ts
    ├── openapi.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── src
    │   ├── app.controller.spec.ts
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── client
    │   ├── dto
    │   └── main.ts
    ├── test
    │   ├── app.e2e-spec.ts
    │   └── jest-e2e.json
    ├── tsconfig.build.json
    └── tsconfig.json
```


###  Project Index
<details open>
	<summary><b><code>/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/nest-cli.json'>nest-cli.json</a></b></td>
				<td>- Nest-cli.json serves as a configuration file for the NestJS CLI in the project<br>- It specifies the use of NestJS schematics for code generation, sets the source root directory, and enables the deletion of the output directory before recompiling, ensuring a clean build environment.</td>
			</tr>
			<tr>
				<td><b><a href='/tsconfig.build.json'>tsconfig.build.json</a></b></td>
				<td>- Tsconfig.build.json extends the base TypeScript configuration and specifies exclusions for the build process<br>- It omits node_modules, test, dist directories, and any TypeScript files ending with spec.ts from the build<br>- This ensures a clean, efficient build by excluding unnecessary or test-related files.</td>
			</tr>
			<tr>
				<td><b><a href='/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- The tsconfig.json file serves as a configuration guide for the TypeScript compiler in the project<br>- It specifies the compiler options such as the module system, target JavaScript version, and output directory<br>- It also controls the compiler's behavior regarding code checks and experimental features, contributing to the overall codebase architecture's robustness and efficiency.</td>
			</tr>
			<tr>
				<td><b><a href='/openapi.json'>openapi.json</a></b></td>
				<td>- The openapi.json file serves as the API documentation for the Cats project<br>- It outlines the available endpoints, their operations, and the expected request and response formats<br>- This includes operations for creating, updating, and deleting cat records, with detailed schemas for the data involved.</td>
			</tr>
			<tr>
				<td><b><a href='/pnpm-lock.yaml'>pnpm-lock.yaml</a></b></td>
				<td>- The `pnpm-lock.yaml` file is a crucial part of the project's codebase<br>- It is responsible for maintaining the consistency of the project's dependencies<br>- This file locks the versions of the project's dependencies to ensure that all environments where the project is run use the same versions of each dependency<br>- This is critical for avoiding potential conflicts or bugs that could arise from version discrepancies.

In the context of the entire project, this file interacts with the project's package management system, ensuring that the correct versions of dependencies are installed and used<br>- It includes dependencies such as '@hey-api/openapi-ts' and '@nestjs/common', among others<br>- The settings within this file also control certain behaviors of the package manager, such as whether to automatically install peer dependencies and whether to exclude links from the lockfile<br>- In summary, the `pnpm-lock.yaml` file is a key component in managing the project's dependencies and ensuring the consistent behavior of the project across different environments.</td>
			</tr>
			<tr>
				<td><b><a href='/package.json'>package.json</a></b></td>
				<td>- The package.json file serves as the blueprint for the 'hey-api-back' project<br>- It outlines the necessary scripts for building, starting, and testing the application<br>- It also lists the dependencies required for the project to function correctly<br>- This file is crucial for setting up the development, testing, and production environments.</td>
			</tr>
			<tr>
				<td><b><a href='/openapi-ts.config.ts'>openapi-ts.config.ts</a></b></td>
				<td>- Openapi-ts.config.ts configures the OpenAPI TypeScript tooling for the project<br>- It specifies the input and output paths, and includes a list of plugins to enhance functionality<br>- This configuration aids in generating a TypeScript client from the OpenAPI specification, integrating with various libraries like React Query, Zod, and Next.js, and ensuring type safety and validation.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/src/app.module.ts'>app.module.ts</a></b></td>
				<td>- AppModule, located at src/app.module.ts, serves as the root module of the application<br>- It orchestrates the application's overall functionality by importing and bundling necessary components<br>- Specifically, it incorporates AppController and AppService, which are crucial for handling requests and executing business logic respectively<br>- This module is fundamental to the application's structure and operation.</td>
			</tr>
			<tr>
				<td><b><a href='/src/app.controller.spec.ts'>app.controller.spec.ts</a></b></td>
				<td>- AppController.spec.ts is a test file in the NestJS framework, responsible for testing the functionality of the AppController<br>- It ensures that the root function of the AppController correctly returns "Hello World!"<br>- This contributes to the overall reliability and stability of the application.</td>
			</tr>
			<tr>
				<td><b><a href='/src/app.controller.ts'>app.controller.ts</a></b></td>
				<td>- AppController, located at src/app.controller.ts, serves as the main controller for the application<br>- It leverages the AppService to handle requests and responses for creating, updating, and deleting 'Cat' records<br>- It also provides API documentation details for successful and unsuccessful operations.</td>
			</tr>
			<tr>
				<td><b><a href='/src/app.service.ts'>app.service.ts</a></b></td>
				<td>- AppService, located in src/app.service.ts, serves as a central hub for managing cat-related operations<br>- It provides functionality for creating, updating, and deleting cat records, as well as a basic greeting<br>- Exception handling is incorporated for scenarios where a requested cat record is not found.</td>
			</tr>
			<tr>
				<td><b><a href='/src/main.ts'>main.ts</a></b></td>
				<td>- The main.ts file in the src directory initializes the application, sets up the Swagger API documentation, and starts the server<br>- It also generates an OpenAPI JSON file for the API reference and configures the application to use it<br>- The application listens on port 3000.</td>
			</tr>
			</table>
			<details>
				<summary><b>dto</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/src/dto/create-cat.dto.ts'>create-cat.dto.ts</a></b></td>
						<td>- CreateCatDto, located in src/dto, defines the data transfer object for creating a new cat entry in the system<br>- It validates and structures the input data, including the cat's name, sex, age, breed, color, and optional owner ID, ensuring consistency and integrity across the application.</td>
					</tr>
					<tr>
						<td><b><a href='/src/dto/update-cat.dto.ts'>update-cat.dto.ts</a></b></td>
						<td>- UpdateCatDto, located in src/dto/update-cat.dto.ts, extends the functionality of CreateCatDto by leveraging the PartialType from '@nestjs/swagger'<br>- This allows for the modification of existing 'Cat' entities in the codebase, enhancing the flexibility and adaptability of the overall project structure.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>client</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='/src/client/types.gen.ts'>types.gen.ts</a></b></td>
						<td>- The 'types.gen.ts' file in the 'src/client' directory defines TypeScript types for data transfer objects (DTOs) and API responses related to cat management<br>- It includes types for creating, updating, and deleting cat records, as well as for handling API errors and client options<br>- These types facilitate type safety and code readability throughout the project.</td>
					</tr>
					<tr>
						<td><b><a href='/src/client/client.gen.ts'>client.gen.ts</a></b></td>
						<td>- The client.gen.ts file, located in the src/client directory, is responsible for generating the client's initial configuration<br>- It utilizes the createClientConfig function during client initialization, which is particularly beneficial in applications like Next.js to ensure correct values<br>- The file also exports a client created with a default configuration.</td>
					</tr>
					<tr>
						<td><b><a href='/src/client/zod.gen.ts'>zod.gen.ts</a></b></td>
						<td>- The 'zod.gen.ts' file, located in the 'src/client' directory, serves as a crucial component in the project's architecture<br>- It defines and exports data validation schemas for creating and updating cat records<br>- These schemas are used to ensure data integrity when interacting with cat-related endpoints in the application, thereby enhancing the robustness of the system.</td>
					</tr>
					<tr>
						<td><b><a href='/src/client/sdk.gen.ts'>sdk.gen.ts</a></b></td>
						<td>- The sdk.gen.ts file in the src/client directory serves as a generated SDK for the application<br>- It provides functions for interacting with the application's API endpoints, such as getting a greeting message, creating, updating, and deleting a cat object<br>- It also includes options for customizing the client instance and passing metadata.</td>
					</tr>
					<tr>
						<td><b><a href='/src/client/index.ts'>index.ts</a></b></td>
						<td>- Index.ts, located in the src/client directory, serves as an auto-generated entry point for the client-side of the application<br>- It exports functionalities from two modules: 'types.gen' and 'sdk.gen'<br>- 'types.gen' provides type definitions, while 'sdk.gen' offers software development kit utilities, contributing to the overall codebase architecture.</td>
					</tr>
					</table>
					<details>
						<summary><b>@tanstack</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='/src/client/@tanstack/react-query.gen.ts'>react-query.gen.ts</a></b></td>
								<td>- The code in 'react-query.gen.ts' primarily facilitates the interaction with the application's API<br>- It exports functions that generate query keys and options for various operations such as getting a greeting message, creating, deleting, and updating a 'Cat' entity<br>- It also provides mutation options for creating, deleting, and updating a 'Cat'.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- test Submodule -->
		<summary><b>test</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='/test/jest-e2e.json'>jest-e2e.json</a></b></td>
				<td>- Jest-e2e.json configures end-to-end testing for the project, specifying the file extensions for modules, the root directory, and the testing environment<br>- It also defines the transformation rules for TypeScript and JavaScript files and the regex for identifying test files<br>- This setup ensures comprehensive and reliable testing across the entire codebase.</td>
			</tr>
			<tr>
				<td><b><a href='/test/app.e2e-spec.ts'>app.e2e-spec.ts</a></b></td>
				<td>- The 'app.e2e-spec.ts' file serves as an end-to-end testing module for the application, ensuring the main server responds correctly to HTTP GET requests<br>- It leverages the NestJS testing utilities and the supertest library to simulate server requests and validate responses, contributing to the overall reliability of the application.</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with , ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install  using one of the following methods:

**Build from source:**

1. Clone the  repository:
```sh
❯ git clone ../
```

2. Navigate to the project directory:
```sh
❯ cd 
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run  using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://LOCAL///discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://LOCAL///issues)**: Submit bugs found or log feature requests for the `` project.
- **💡 [Submit Pull Requests](https://LOCAL///blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your LOCAL account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone .
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to LOCAL**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://LOCAL{///}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=/">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
