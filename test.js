import test from 'ava';
import isWebpackDevServer from '.';

test('webpack-dev-server', t => {
	t.false(isWebpackDevServer);
});
