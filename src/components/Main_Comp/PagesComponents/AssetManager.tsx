import {
  mdiDelete,
  mdiDownload,
  mdiEye,
  mdiFileDocument,
  mdiImage,
  mdiMusic,
  mdiPlus,
  mdiSearchWeb,
  mdiVideo,
} from '@mdi/js'
import Icon from '@mdi/react'
import { useState } from 'react'

export const AssetsLibrary = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Files', count: 156 },
    { id: 'images', name: 'Images', count: 89 },
    { id: 'videos', name: 'Videos', count: 23 },
    { id: 'documents', name: 'Documents', count: 34 },
    { id: 'audio', name: 'Audio', count: 10 },
  ]

  const assets = [
    {
      id: 1,
      name: 'hero-banner.jpg',
      type: 'image',
      size: '2.4 MB',
      uploaded: '2025-05-20',
      dimensions: '1920x1080',
      url: '/placeholder-image.jpg',
    },
    {
      id: 2,
      name: 'product-demo.mp4',
      type: 'video',
      size: '45.2 MB',
      uploaded: '2025-05-19',
      duration: '3:24',
      url: '/placeholder-video.mp4',
    },
    {
      id: 3,
      name: 'brand-guidelines.pdf',
      type: 'document',
      size: '12.8 MB',
      uploaded: '2025-05-18',
      pages: 24,
      url: '/placeholder-document.pdf',
    },
    {
      id: 4,
      name: 'logo-variants.zip',
      type: 'archive',
      size: '8.5 MB',
      uploaded: '2025-05-17',
      files: 12,
      url: '/placeholder-archive.zip',
    },
    {
      id: 5,
      name: 'background-music.mp3',
      type: 'audio',
      size: '5.2 MB',
      uploaded: '2025-05-16',
      duration: '2:45',
      url: '/placeholder-audio.mp3',
    },
    {
      id: 6,
      name: 'team-photo.jpg',
      type: 'image',
      size: '3.1 MB',
      uploaded: '2025-05-15',
      dimensions: '2048x1365',
      url: '/placeholder-team.jpg',
    },
  ]

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return mdiImage
      case 'video':
        return mdiVideo
      case 'document':
        return mdiFileDocument
      case 'audio':
        return mdiMusic
      default:
        return mdiFileDocument
    }
  }

  const getFileColor = (type: string) => {
    switch (type) {
      case 'image':
        return 'text-green-600 bg-green-100'
      case 'video':
        return 'text-purple-600 bg-purple-100'
      case 'document':
        return 'text-red-600 bg-red-100'
      case 'audio':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const filteredAssets = assets.filter((asset) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'images' && asset.type === 'image') ||
      (selectedCategory === 'videos' && asset.type === 'video') ||
      (selectedCategory === 'documents' && asset.type === 'document') ||
      (selectedCategory === 'audio' && asset.type === 'audio')

    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="p-6 flex flex-col gap-6 flex-1 min-w-0 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Assets Library</h1>
            <p className="text-gray-600 mt-1">Manage your media files and documents</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            <Icon size={0.8} path={mdiPlus} className="inline mr-2" />
            Upload Files
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 flex flex-col gap-4">
          {/* Categories */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          selectedCategory === category.id
                            ? 'bg-blue-200 text-blue-700'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {category.count}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage Info */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Storage</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Used</span>
                <span className="font-medium">2.4 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '48%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>2.4 GB</span>
                <span>5 GB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              {/* Search */}
              <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg bg-gray-50 flex-1 max-w-md">
                <Icon size={0.9} color="rgb(107 114 128)" path={mdiSearchWeb} />
                <input
                  className="border-0 flex-1 focus:outline-0 bg-transparent text-gray-700 placeholder-gray-500"
                  type="text"
                  placeholder="Search assets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* View Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    viewMode === 'list'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Assets Grid/List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow group"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-16 h-16 rounded-lg flex items-center justify-center mb-3 ${getFileColor(asset.type)}`}
                      >
                        <Icon size={1.5} path={getFileIcon(asset.type)} />
                      </div>
                      <h4 className="font-medium text-gray-900 text-sm text-center mb-1 truncate w-full">
                        {asset.name}
                      </h4>
                      <p className="text-xs text-gray-500">{asset.size}</p>
                      <p className="text-xs text-gray-400">{asset.uploaded}</p>

                      {/* Actions */}
                      <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 text-gray-600 hover:text-blue-600 transition-colors">
                          <Icon size={0.8} path={mdiEye} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-green-600 transition-colors">
                          <Icon size={0.8} path={mdiDownload} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-red-600 transition-colors">
                          <Icon size={0.8} path={mdiDelete} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Size</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Uploaded</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredAssets.map((asset) => (
                      <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded flex items-center justify-center ${getFileColor(asset.type)}`}
                            >
                              <Icon size={0.8} path={getFileIcon(asset.type)} />
                            </div>
                            <span className="font-medium text-gray-900">{asset.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600 capitalize">{asset.type}</td>
                        <td className="py-3 px-4 text-gray-600">{asset.size}</td>
                        <td className="py-3 px-4 text-gray-600">{asset.uploaded}</td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <button className="p-1 text-gray-600 hover:text-blue-600 transition-colors">
                              <Icon size={0.8} path={mdiEye} />
                            </button>
                            <button className="p-1 text-gray-600 hover:text-green-600 transition-colors">
                              <Icon size={0.8} path={mdiDownload} />
                            </button>
                            <button className="p-1 text-gray-600 hover:text-red-600 transition-colors">
                              <Icon size={0.8} path={mdiDelete} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {filteredAssets.length === 0 && (
              <div className="text-center py-12">
                <Icon size={3} path={mdiFileDocument} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No assets found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
