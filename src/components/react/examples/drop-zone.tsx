import { useState } from 'react'

import { parseFileSize } from '@/lib/utils'
import {
  DropZone,
  IMAGE_MIME_TYPE,
  PDF_MIME_TYPE,
} from '@/components/ui/drop-zone'
import { Icon } from '@/components/ui/icon'
import { IconButton } from '@/components/ui/icon-button'

export const SingleFileDropzone = () => {
  const [image, setImage] = useState<File | null>(null)

  return (
    <div className="flex-center w-full flex-col gap-y-6 rounded-md bg-background p-4">
      <DropZone
        accept={IMAGE_MIME_TYPE}
        onDropAccepted={(files) => {
          setImage(files[0])
        }}
      >
        <DropZone.Content>
          <DropZone.Accept>
            <Icon symbol="thumb_up" className="text-6xl opacity-60" />
          </DropZone.Accept>
          <DropZone.Reject>
            <Icon symbol="thumb_down" className="text-6xl opacity-60" />
          </DropZone.Reject>
          <DropZone.Idle>
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="mx-auto mb-4 aspect-square h-[60px] rounded-sm object-cover object-center animate-in zoom-in-0"
              />
            ) : (
              <Icon symbol="image" className="text-6xl opacity-60" />
            )}
          </DropZone.Idle>
          <div className="space-y-2">
            <p>Click to upload an Image. Or drag and drop</p>
            <p className="text-body-sm opacity-60">
              Allowed formats: .png, .jpeg, .webp
            </p>
          </div>
        </DropZone.Content>
      </DropZone>
    </div>
  )
}

export const MultipleFilesDropzone = () => {
  const [files, setFiles] = useState<File[]>([])

  return (
    <div className="flex-center w-full flex-col rounded-md bg-background p-4">
      <DropZone
        multiple
        accept={[...IMAGE_MIME_TYPE, ...PDF_MIME_TYPE]}
        onDropAccepted={(files) => {
          setFiles(files)
        }}
      >
        <DropZone.Content>
          <DropZone.Accept>
            <Icon symbol="thumb_up" className="text-6xl opacity-60" />
          </DropZone.Accept>
          <DropZone.Reject>
            <Icon symbol="thumb_down" className="text-6xl opacity-60" />
          </DropZone.Reject>
          <DropZone.Idle>
            <Icon symbol="upload_file" className="text-6xl opacity-60" />
          </DropZone.Idle>
          <div className="space-y-2">
            <p>Click to upload files. Or drag and drop</p>
            <p className="text-body-sm opacity-60">
              Allowed formats: .png, .jpeg, .webp, .pdf
            </p>
          </div>
        </DropZone.Content>
      </DropZone>
      {files.length > 0 && (
        <div className="w-full space-y-2 p-4">
          {files.map((file) => (
            <div key={file.name} className="flex items-center text-start">
              <DropZone.Preview>
                {(() => {
                  if (PDF_MIME_TYPE.includes(file.type)) {
                    return (
                      <Icon
                        symbol="description"
                        className="text-3xl opacity-60"
                      />
                    )
                  }
                  if (IMAGE_MIME_TYPE.includes(file.type)) {
                    return (
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className="aspect-square h-full object-cover object-center animate-in zoom-in-0"
                      />
                    )
                  }
                  return (
                    <Icon symbol="folder" className="text-3xl opacity-60" />
                  )
                })()}
              </DropZone.Preview>
              <div>
                <p className="text-title-md">{file.name}</p>
                <p className="text-body-sm text-onSurfaceVariant">
                  {parseFileSize({ size: file.size, metric: 'MB' })} MB
                </p>
              </div>
              <IconButton
                variant="standard"
                className="ml-auto opacity-50 hover:opacity-100"
                onClick={() => setFiles(files.filter((f) => f !== file))}
              >
                <Icon symbol="close" />
              </IconButton>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const OutlinedDropzone = () => {
  const [image, setImage] = useState<File | null>(null)

  return (
    <DropZone
      variant="outlined"
      accept={IMAGE_MIME_TYPE}
      onDropAccepted={(files) => {
        setImage(files[0])
      }}
    >
      <DropZone.Content>
        <DropZone.Accept>
          <Icon symbol="thumb_up" className="text-6xl opacity-60" />
        </DropZone.Accept>
        <DropZone.Reject>
          <Icon symbol="thumb_down" className="text-6xl opacity-60" />
        </DropZone.Reject>
        <DropZone.Idle>
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="mx-auto mb-4 aspect-square h-[60px] rounded-sm object-cover object-center animate-in zoom-in-0"
            />
          ) : (
            <Icon symbol="image" className="text-6xl opacity-60" />
          )}
        </DropZone.Idle>
        <div className="space-y-2">
          <p>Click to upload an Image. Or drag and drop</p>
          <p className="text-body-sm opacity-60">
            Allowed formats: .png, .jpeg, .webp
          </p>
        </div>
      </DropZone.Content>
    </DropZone>
  )
}
