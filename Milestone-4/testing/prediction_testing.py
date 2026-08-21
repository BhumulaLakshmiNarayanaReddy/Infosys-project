# Prediction Testing for IT Support Tickets

import os
import pickle
import re


# Loading the trained model and vectorizer
MODEL_PATH = '../artifacts/model.pkl'
VECTORIZER_PATH = '../artifacts/vectorizer.pkl'

with open(MODEL_PATH, 'rb') as file:
    model = pickle.load(file)

with open(VECTORIZER_PATH, 'rb') as file:
    vectorizer = pickle.load(file)


# Cleaning the ticket text
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^a-zA-Z\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()


# Predicting ticket priority
def predict_priority(title, description):
    text = f'{title} {description}'
    cleaned_text = clean_text(text)

    features = vectorizer.transform([cleaned_text])
    prediction = model.predict(features)[0]

    confidence = None

    if hasattr(model, 'predict_proba'):
        probabilities = model.predict_proba(features)[0]
        confidence = probabilities.max()

    return prediction, confidence


# Testing new support tickets
test_tickets = [
    {
        'title': 'Production server is down',
        'description': 'All employees are unable to access the application.'
    },
    {
        'title': 'Password reset request',
        'description': 'I forgot my password and need help resetting it.'
    },
    {
        'title': 'VPN connection problem',
        'description': 'I cannot connect to the company VPN from my laptop.'
    },
    {
        'title': 'Security breach detected',
        'description': 'Suspicious activity has been detected on the company network.'
    }
]


# Displaying predictions
for index, ticket in enumerate(test_tickets, start=1):
    prediction, confidence = predict_priority(
        ticket['title'],
        ticket['description']
    )

    print(f'\nTicket {index}')
    print('Title:', ticket['title'])
    print('Description:', ticket['description'])
    print('Predicted Priority:', prediction)

    if confidence is not None:
        print('Confidence:', f'{confidence:.2%}')
