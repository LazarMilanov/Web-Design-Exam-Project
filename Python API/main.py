import json
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/city/{city}")
async def root(city: str):
	citylist = []
	with open('offers.json', 'r') as offers:
		data = json.load(offers)
		if city == "all":
			return data
		else:
			for flight in data:
				if flight["city"] == city:
					citylist.append(flight)
			return citylist

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)