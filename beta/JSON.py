import json, requests

#r = requests.post('http://localhost:8080/main/shopService?high_limit=200')
r = requests.post('http://appeti.in/shopService?high_limit=100')
data =  r.json()

def convert(val):
	lookup = {'gms': 0.001, 'pcs': 100, 'Bot': 100}
	unit = val[-3:]
	unit2 = val[-2:]
	unit3 = val[-6:]
	if unit2 == 'Kg':
		return val[:-3]
	if unit3 == 'Bottle':
		return val[:-6]

	try:
		number = int(val[:-4])
	except ValueError:
		return val[:-3]
	if unit in lookup:
		return lookup[unit] * number
	return int(val)

j = 0
del_dupes = []

for i in data['list']:
	title = data['list'][j]["ptitleName"]
	seller = data['list'][j]["sellerName"]
	price = str(data['list'][j]["mrp"])
	weight = convert(data['list'][j]["unit"])

	if title in del_dupes:
		print ('Duplicate product ignored: ' + title)
		j += 1
		continue

	del_dupes.append(str(title))

	try:
		data['list'][j]["image"].values()[0]
	except NameError:
		j += 1
		continue

	else:
		imageMappin = data['list'][j]["image"]
		image = imageMappin.values()[0]
	

	categoryMappin = data['list'][j]["categoryMap"]
	category = categoryMappin.values()[0]

	if len(str(j)) == 1:
		a=open ('_products/Product00' + str(j) + '- ' + str(title) + '.md', 'w')
	if len(str(j)) == 2:
		a=open ('_products/Product0' + str(j) + '- ' + str(title) + '.md', 'w')
	if len(str(j)) == 3:
		a=open ('_products/Product' + str(j) + '- ' + str(title) + '.md', 'w')

	a.write('---\n')
	a.write("name: " + title + '\n')
	a.write("seller: " + seller + '\n')
	a.write("price: " + price + '\n')
	a.write("weight: " + str(weight) + '\n')
	a.write("type: " + category + '\n')
	try:
		image
	except NameError:
		continue
	else:
		a.write("image: " + image + '\n')
	a.write('---' + '\n')

	j += 1