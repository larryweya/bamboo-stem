import os

from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.md')).read()
CHANGES = open(os.path.join(here, 'CHANGES.txt')).read()

requires = [
    'PasteScript',
    'pyramid',
    'pybamboo',
    'SQLAlchemy',
    'transaction',
    'pyramid_tm',
    'pyramid_debugtoolbar',
    'zope.sqlalchemy',
    'waitress',
    'uwsgi',
    'MySQL-python',
    'webtest',
    'fabric',
    'uwsgi',
]

setup(name='stem',
      version='0.0',
      description='stem',
      long_description=README + '\n\n' + CHANGES,
      classifiers=[
        "Programming Language :: Python",
        "Framework :: Pyramid",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
        ],
      author='',
      author_email='',
      url='',
      keywords='web wsgi bfg pylons pyramid bamboo',
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      test_suite='stem',
      install_requires=requires,
      entry_points="""\
      [paste.app_factory]
      main = stem:main
      [console_scripts]
      initialize_stem_db = stem.scripts.initializedb:main
      """,
      )
