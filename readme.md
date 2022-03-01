•	Install npm
•	Install newman using command npm install -g newman
•	Install htmlextra using command npm install -g newman-reporter-htmlextra
•	To run Entire collection:
	newman run supervillain.postman_collection.json --environment supervillain_TEST.postman_environment.json -r htmlextra
•	To run specific folder from collection:
newman run supervillain.postman_collection.json --folder "FOLDER_NAME" --folder " FOLDER_NAME" --environment supervillain_TEST.postman_environment.json -r htmlextra
