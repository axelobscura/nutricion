import { NextApiHandler } from 'next'
import { query } from 'lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { 
    nombre, 
    apaterno, 
    amaterno, 
    email, 
    titulo, 
    telefono, 
    fnacimiento, 
    sexo,
    activo
  } = req.body
  try {
    if (!nombre || !email) {
      return res
        .status(400)
        .json({ message: '`nombre` and `email` son requeridos' })
    }

    const results = await query(
      `
      INSERT INTO registro_nutricion (nombre, apaterno, amaterno, email, titulo, telefono, fnacimiento, sexo, activo)
      VALUES ('${nombre}', '${apaterno}', '${amaterno}', '${email}', '${titulo}', '${telefono}', '${fnacimiento}', '${sexo}', '${activo}')
      `,
    )
    return res.json(results)
  } catch (e: any) {
    res.status(500).json({ message: e.message })
  }
}
export default handler