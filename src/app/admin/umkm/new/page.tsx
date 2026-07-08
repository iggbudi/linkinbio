import UmkmForm from '@/components/UmkmForm'

export default function NewUmkmPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tambah UMKM Baru</h1>
        <p className="text-gray-500 mt-1">Buat halaman link-in-bio untuk UMKM</p>
      </div>

      <UmkmForm mode="create" />
    </div>
  )
}
