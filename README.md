AI-Powered Customer Support Platform with Ticket Resolution Agent (Infosys-project):
===============

Milestone 1 - Frontend Common Components Development
----------------------------------------------------

### My Contribution

For Milestone 1, I developed reusable React components for the AI Ticket Management System. The objective was to create common UI components that could be reused across Employee, Support, and Admin modules instead of implementing the same functionality repeatedly.

I developed the following components:

*   **Button** – Reusable button with Primary, Secondary, and Danger variants, along with click, disabled, and custom CSS support.
    
*   **Loader** – Displays a loading spinner with customizable loading text.
    
*   **Modal** – Reusable popup supporting dynamic content through children and multiple closing methods.
    
*   **Confirm Dialog** – Provides reusable Confirm and Cancel actions for operations such as deletion and logout.
    
*   **Navbar** – Displays application and user information and supports nested components.
    
*   **Notification Bell** – Displays notification count and handles large counts using 99+.
    
*   **Sidebar** – Dynamically renders navigation items using React Router NavLink.
    
*   **Ticket Card** – Displays ticket details such as title, category, priority, status, assignee, and creation date.
    
*   **Ticket Table** – Dynamically displays ticket records and handles empty data and row selection.
    
*   **Analytics Chart** – Created the reusable structure for displaying analytics data.
    
*   **Protected Route** – Implements authentication and role-based route protection with appropriate redirects and loading states.
    

### Technologies Used

*   React.js
    
*   React Router DOM
    
*   JavaScript ES6+
    
*   JSX
    
*   Vite
    

### Concepts Applied

*   Functional Components
    
*   Component Reusability
    
*   Props and Children Props
    
*   Conditional and Dynamic Rendering
    
*   Event Handling
    
*   React Router
    
*   Protected Routing
    
*   Role-Based Access Control
    

### Learning Outcome

This milestone helped me understand reusable React architecture, component communication through props, dynamic rendering, routing, and protected access control.

Milestone 2 - Backend ML Classification API Development
=======================================================

### My Contribution

For Milestone 2, I worked on the backend API layer responsible for connecting the ticket classification functionality with the application. I implemented the FastAPI request/response structure and classification service for predicting ticket priority.

The main components developed were:

*   **Request and Response Schemas** – Defined structured data models for ticket classification requests and responses.
    
*   **Classification Route** – Implemented the API endpoint for receiving ticket title, description, and category and returning the classification result.
    
*   **Classifier Service** – Implemented the service responsible for loading the trained ML model and TF-IDF vectorizer, processing ticket text, predicting priority, and returning confidence.
    
*   **Fallback Classification** – Added a keyword-based heuristic mechanism that can provide a priority prediction when the ML model is unavailable or prediction fails.
    

The classification flow is:


   Ticket Title + Description   
            ↓  
   FastAPI Classification API    
            ↓  
   ML Classifier        
            ↓  
   Priority + Category + Confidence   

The classifier supports the priority levels:

*   Critical
    
*   High
    
*   Medium
    
*   Low
    

### Technologies Used

*   Python
    
*   FastAPI
    
*   Pydantic
    
*   Pickle
    
*   Scikit-learn ML model
    
*   TF-IDF Vectorizer
    

### Learning Outcome

This milestone helped me understand backend API development, request/response validation, integrating machine learning models with APIs, error handling, and creating fallback mechanisms for reliable classification.

Milestone 3 - Dataset Analysis and Text Preprocessing
=====================================================

### My Contribution

For Milestone 3, I focused on understanding and preparing the dataset used for IT ticket priority classification. The dataset contains ticket titles, descriptions, and their corresponding priority labels.

I organized the ML work into separate analysis and preprocessing sections to make the workflow easy to understand and reusable for future development.

### Dataset Analysis

I analyzed the dataset to understand:

*   Number of records and columns
    
*   Column names and data types
    
*   Missing values
    
*   Duplicate records
    
*   Unique priority classes
    
*   Priority distribution
    
*   Ticket title and description lengths
    
*   Common words in ticket descriptions
    
*   Words associated with different priority levels
    
*   Sample tickets for each priority
    

I also created visualizations to understand the distribution and characteristics of the ticket data.

### Text Preprocessing

I prepared the ticket text for machine learning by:

*   Combining ticket title and description
    
*   Converting text to lowercase
    
*   Removing unnecessary characters and numbers
    
*   Removing extra spaces
    
*   Creating a cleaned text field
    

The preprocessing workflow is:

  Title + Description          
  ↓  
  Text Combination          
  ↓  
  Lowercase Conversion          
  ↓  
  Character Cleaning          
  ↓  
  Whitespace Cleaning          
  ↓  
  Clean Text   

### Technologies Used

*   Python
    
*   Pandas
    
*   Matplotlib
    
*   Regular Expressions
    

### Learning Outcome

This milestone helped me understand dataset quality, exploratory data analysis, text characteristics, and the importance of preparing raw text before applying machine learning algorithms.

Milestone 4 - ML Model Training, Evaluation and Prediction
==========================================================

### My Contribution

For Milestone 4, I worked on developing and evaluating the machine learning model for automatic IT ticket priority classification.

Instead of relying on a single algorithm, I designed the training workflow to compare multiple text-classification models and select the best-performing model based on evaluation metrics.

### Model Development

The ticket title and description are converted into numerical features using **TF-IDF Vectorization**.

I trained and compared:

*   Multinomial Naive Bayes
    
*   Logistic Regression
    
*   Linear Support Vector Machine (SVM)
    

The training workflow is:

  Clean Ticket Text          
  ↓  
  TF-IDF Vectorization          
  ↓  
  Train/Test Split          
  ↓  
  Multiple ML Models          
  ↓  
  Model Evaluation          
  ↓  
  Best Model Selection   

### Model Evaluation

The models are compared using:

*   Accuracy
    
*   Precision
    
*   Recall
    
*   F1-Score
    
*   Classification Report
    
*   Confusion Matrix
    

The best-performing model is selected based on the comparison results rather than assuming a particular algorithm in advance.

### Model Artifacts

The selected model and fitted TF-IDF vectorizer are saved as:

   model.pkl  
   vectorizer.pkl   

These artifacts can then be loaded by the backend classification service.

### Prediction Testing

I created a separate prediction-testing script to load the saved model and vectorizer and test new, unseen support tickets.

The prediction flow is:

New Ticket      
↓  
Text Preprocessing      
↓  
TF-IDF Vectorizer      
↓  
Trained ML Model      
↓  
Predicted Priority      
↓  
Confidence Score   

### Technologies Used

*   Python
    
*   Pandas
    
*   Scikit-learn
    
*   TF-IDF
    
*   Multinomial Naive Bayes
    
*   Logistic Regression
    
*   Linear SVM
    
*   Pickle
    
*   Matplotlib
    

### Learning Outcome

This milestone helped me understand the complete machine learning workflow from feature extraction and model training to model comparison, evaluation, model persistence, and prediction on new tickets. It also helped me understand how a trained ML model can be integrated into a backend API for real-time ticket classification.

Overall Learning
================

Across these milestones, I gained practical experience in both frontend and backend development along with machine learning. I worked with reusable React components, API development using FastAPI, dataset analysis, text preprocessing, TF-IDF feature extraction, machine learning model training, evaluation, model persistence, and prediction testing.

The overall system connects these components to provide an AI-based ticket management workflow that can automatically classify support tickets based on their content.
