import easywatch
from selenium import webdriver
import os

if __name__ == "__main__":
    driver = webdriver.Chrome()
    driver.get(
            'file:///Users/isthisnagee/UofT/csc373/notes/notes/docs/index.html'
            )

    def handler(event_type, src_path):
        print 'REFRESHING ' + src_path
        os.system('make clean && make &>/dev/null')
        driver.refresh()
        print 'REFRESHING'

    easywatch.watch('./notes', handler)
