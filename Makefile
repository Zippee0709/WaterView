## Makefile

all:
	yarn install && yarn start

clean:
	echo "No test to execute"

build:
	yarn build

unit_tests:
	yarn test

fclean:	clean
	rm -rf node_modules/
	echo "[node_module] folder has been delete"

re:	clean fclean all

.PHONY:	all re clean fclean unit_tests build