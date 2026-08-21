# Text Preprocessing for IT Support Tickets

import pandas as pd
import re

# Loading the dataset
df = pd.read_csv('../dataset/training_data.csv')

# Combining title and description
df['text'] = df['title'].fillna('') + ' ' + df['description'].fillna('')


# Cleaning the text
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^a-zA-Z\s]', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip()


# Applying text cleaning
df['clean_text'] = df['text'].apply(clean_text)


# Checking the original and cleaned text
df[['text', 'clean_text']].head()


# Checking the number of empty text records
df['clean_text'].eq('').sum()


# Checking the cleaned dataset
df[['title', 'description', 'clean_text', 'priority']].head()
