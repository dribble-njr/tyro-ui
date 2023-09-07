/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

function createComponent(componentName) {
  const componentFolder = path.join(__dirname, 'src', componentName)

  if (fs.existsSync(componentFolder)) {
    console.error(`Component with the name "${componentName}" already exists.`)
    return
  }

  fs.mkdirSync(componentFolder)

  fs.writeFileSync(path.join(componentFolder, 'index.md'), '')
  fs.writeFileSync(path.join(componentFolder, 'index.tsx'), '')
  fs.writeFileSync(path.join(componentFolder, `${componentName}.tsx`), '')

  fs.mkdirSync(path.join(componentFolder, '__test__'))
  fs.writeFileSync(path.join(componentFolder, '__test__', 'index.test.tsx'), '')

  fs.mkdirSync(path.join(componentFolder, 'demo'))
  fs.writeFileSync(path.join(componentFolder, 'demo', 'basic.tsx'), '')

  fs.mkdirSync(path.join(componentFolder, 'style'))
  fs.writeFileSync(path.join(componentFolder, 'style', 'index.scss'), '')

  console.log(`Component "${componentName}" is created.`)
}

const componentName = process.argv[2]
createComponent(componentName)
