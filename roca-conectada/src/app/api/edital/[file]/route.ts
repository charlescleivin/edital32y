import { readFile } from 'fs/promises'
import path from 'path'

const ALLOWED = new Set([
  '25_03_2026_AgriFam-ICT_2026_Edital (2).pdf',
  '25_03_2026_AgriFam-ICT_2026_Anexo_1.pdf',
  '25_03_2026_AgriFam-ICT_2026_Anexo_2.pdf',
  '25_03_2026_AgriFam-ICT_2026_Anexo2_e_demais.pdf',
  '25_03_2026_AgriFam-ICT_2026_Anexo_3.pdf',
  '25_03_2026_AgriFam-ICT_2026_Anexo_4.pdf',
  '25_03_2026_AgriFam-ICT_2026_Anexo_5.pdf',
  '25_03_2026_AgriFam-ICT_2026_Anexo_6.pdf',
  '09_04_2026_Telas_FAP_e_Numero_de_Caracteres.pdf',
])

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params
  const decoded = decodeURIComponent(file)

  if (!ALLOWED.has(decoded)) {
    return new Response('Not found', { status: 404 })
  }

  const filePath = path.join(process.cwd(), 'data', decoded)

  try {
    const data = await readFile(filePath)
    return new Response(data, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${decoded}"`,
        'Cache-Control': 'private, max-age=3600',
      },
    })
  } catch {
    return new Response('File not found', { status: 404 })
  }
}
