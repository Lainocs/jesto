import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const signIn = async (req, res) => {
	const {
    restaurantName,
    restaurantAddress,
    restaurantCity,
    restaurantState,
    restaurantCountry,
    restaurantZip,
    restaurantPhone,
    accountName,
    accountEmail,
    accountPassword,
  } = req.body

	try {
		const restaurant = await prisma.restaurant.create({
			data: {
				name: restaurantName,
				address: restaurantAddress,
				city: restaurantCity,
				state: restaurantState,
				country: restaurantCountry,
				zip: restaurantZip,
				phone: restaurantPhone,
			},
		})
		const account = await prisma.account.create({
			data: {
				name: accountName,
				email: accountEmail,
				password: accountPassword,
				role: 'admin',
				restaurantId: restaurant.id,
			},
		})

		res.json({ restaurant, account })
	} catch (error) {
		res.json({ error: error.message })
	}
}

export { signIn }
