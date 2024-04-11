import requests

def run():
    url = "https://statistics-eps.vercel.app/media"

    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        print(data)
        return data
    except requests.exceptions.RequestException as e:
        print("Error fetching data:", e)
        return None


run()
