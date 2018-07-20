require('dotenv').config()

function getValidConfig (configEnv, keys) {
  let {config, missingKeys} = keys.reduce((acc, key) => {
    if (!configEnv[key]) {
      acc.missingKeys.push(key)
    } else {
      acc.config[key] = configEnv[key]
    }

    return acc
  }, {config: {}, missingKeys: []})

  if (missingKeys.length) {
    throw new Error(
      'Please provide needed Contentful configs:\n' +
      `\nMissing values: ${missingKeys.join(', ')}\n\n` +
      'There are two way to do so:\n' +
      '- define a .contentful.json file (similar to .contentful.sample.json) in the root of this directory\n' +
      `- define all environment variables ${keys.join(', ')}`
    )
  }

  return config
}

module.exports = {
  getConfigForKeys (keys) {
    const configEnv = {
      CTF_PERSON_ID: process.env.CTF_PERSON_ID,
      CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
      CTF_CMA_ACCESS_TOKEN: process.env.CTF_CMA_ACCESS_TOKEN
    }
    return getValidConfig(configEnv, keys)
  }
}
