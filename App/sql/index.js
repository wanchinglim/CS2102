const sql = {}

sql.query = {
	// Counting & Average
	count_play: 'SELECT COUNT(winner) FROM game_plays WHERE user1=$1 OR user2=$1',
	count_wins: 'SELECT COUNT(winner) FROM game_plays WHERE winner=$1',
	avg_rating: 'SELECT AVG(rating) FROM user_games INNER JOIN game_list ON user_games.gamename=game_list.gamename WHERE username=$1',
	
	// Information
	page_game: 'SELECT * FROM game_list WHERE ranking >= $1 AND ranking <= $2 ORDER BY ranking ASC',
	//page_lims: 'SELECT * FROM game_list ORDER BY ranking ASC LIMIT 10 OFFSET $1',
	page_lims: 'SELECT * FROM projects ',
	ctx_games: 'SELECT COUNT(*) FROM projects',
	all_games: 'SELECT ranking,game_list.gamename AS game,rating FROM user_games INNER JOIN game_list ON user_games.gamename=game_list.gamename WHERE username=$1 ORDER BY ranking ASC',
	all_plays: 'SELECT gamename AS game, user1, user2, winner FROM game_plays WHERE user1=$1 OR user2=$1',
	 

	project_info: 'SELECT * FROM projects WHERE pname=$1',
	all_projects: 'SELECT * FROM projects',
	user_projects: 'SELECT * FROM projects WHERE cname=$1',
	all_templates: 'SELECT * FROM projecttemplates',
	all_creators: 'SELECT * FROM creators WHERE cname<>$1',
	all_follows: 'SELECT cname FROM follows WHERE username=$1',
	all_fundings: 'SELECT * FROM fundings WHERE username=$1',
	get_tier: 'SELECT tname \
		FROM FundingTiers \
		WHERE pname=$1 AND amount>=$2\
		ORDER BY amount ASC\
		LIMIT 1',
    get_all_tiers: 'SELECT * FROM FundingTiers WHERE pname=$1',
    get_all_comments: 'SELECT * FROM comments WHERE pname=$1',
    get_all_funds: 'SELECT SUM(amount) FROM Fundings WHERE pname=$1 AND status= $2 GROUP BY pname',
	get_if_admin: 'SELECT COUNT(*) FROM admins WHERE aname=$1 ',

	// Insertion
	add_game: 'INSERT INTO user_games (username, gamename) VALUES($1,$2)',
	add_play: 'INSERT INTO game_plays (user1, user2, gamename, winner) VALUES($1,$2,$3,$4)',
	add_user: 'INSERT INTO Users (username, password, firstname, lastname, r_date) VALUES ($1,$2,$3,$4,$5)',

	add_project: 'INSERT INTO Projects (pname, cname, tname, s_date, e_date, f_goal, description) VALUES ($1,$2,$3,$4,$5,$6,$7)',
	add_fund: 'INSERT INTO Fundings (pname, tname , username, f_date, amount, status) VALUES($1,$2,$3,$4,$5,$6)',
	add_template: 'INSERT INTO ProjectTemplates (tname, style, aname) VALUES ($1,$2,$3)',
	add_follower: 'INSERT INTO Follows (username, cname) VALUES ($1,$2)',
	delete_follower: 'DELETE FROM Follows WHERE Username=$1 and cname=$2',
	
	// Login
	userpass: 'SELECT * FROM Users WHERE username=$1',
	
	// Update
	update_info: 'UPDATE username_password SET first_name=$2, last_name=$3 WHERE username=$1',
	update_pass: 'UPDATE username_password SET password=$2 WHERE username=$1',
	
	// Search
	search_project: 'SELECT * FROM projects WHERE lower(pname) LIKE $1',
}

module.exports = sql